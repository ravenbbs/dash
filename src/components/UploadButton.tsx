"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import Dropzone from "react-dropzone";
import { Cloud, File, Loader2 } from "lucide-react";
import { Progress } from "./ui/progress";
import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "./ui/use-toast";
import { trpc } from "@/app/_trpc/client";
import { useRouter } from "next/navigation";

const UploadDropzone = ({isSubscribed,}: {isSubscribed: boolean}) => {
  const router = useRouter()
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [bgColor, setBgColor] = useState<string>('')
  const {toast} = useToast()

  const { startUpload } = useUploadThing(isSubscribed ? 'premiumPlanUploader' : "freePlanUploader")

  const { mutate: startPolling } = trpc.getFile.useMutation({
    onSuccess: (file) => {
      router.push(`/dashboard/${file.id}`)
    },
    retry: true,
    retryDelay: 500
  })

  const startSimulatedProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);
    return interval
  };

  return (
    <Dropzone 
      preventDropOnDocument
      multiple={false}
      onDrop={async (acceptedFile) => {
        setIsUploading(true);

        const progressInterval = startSimulatedProgress()

        const res = await startUpload(acceptedFile)

        if(!res) {
          return toast({
            title: "Ocurrió un error",
            description: "Por favor intenta de nuevo",
            variant: "destructive"
          })
        }

        const [fileResponse] = res

        const key = fileResponse?.key

        if(!key) {
          return toast({
            title: "Ocurrió un error",
            description: "Por favor intenta de nuevo",
            variant: "destructive"
          })
        }


        setBgColor(res ? 'bg-green-500':'bg-red-500') 
        clearInterval(progressInterval)
        setUploadProgress(100)

        startPolling({key})
      }}
      
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border h-64 m-4 border-gray-300 rounded-lg"
        >
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer transition duration-300 bg-gray-50 hover:bg-gray-100 "
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Cloud className="h-8 w-8 text-zinc-700 mb-2" />
                <p className="mb-2 text-sm text-zinc-600">
                  <span className="font-semibold text-zinc-900 ">
                    Click para cargar un PDF
                  </span>{" "}
                  o arrastra y suelta
                </p>
                <p className="text-xs text-zinc-500">PDF hasta ({isSubscribed? "16" : "4"}MB)</p>
              </div>
              {acceptedFiles && acceptedFiles[0] ? (
                <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200">
                  <div className="px-3 py-2 h-full grid place-items-center">
                    <File className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="px-3 py-2 h-full text-sm truncate">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}
              {isUploading ? (
                <div className="w-full mt-4 max-w-xs mx-auto">
                  <Progress 
                  indicatorColor={
                    uploadProgress === 100 ? bgColor : ''
                  }
                  value={uploadProgress} 
                  className="h-1 w-full bg-zinc-200" />
                  {uploadProgress === 100 ? (
                    <div className="flex gap-1 items-center justify-center text-sm text-zinc-700 text-center pt-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Cargando...
                    </div>
                  ) : null}
                </div>
              ) : null}

              <input
              {...getInputProps()}
              accept="application/pdf"
              aria-label="input dropzone"
              />
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

const UploadButton = ({isSubscribed} : {isSubscribed: boolean}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>Subir PDF</Button>
      </DialogTrigger>
      <DialogContent>
        <UploadDropzone isSubscribed={isSubscribed} />
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;

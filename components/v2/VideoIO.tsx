"use client";
import React, {
  ChangeEvent,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  videoSource?: string;
  handleLoadedMetadata?: any;
  setTime?: any;
  files: IFileTypes[];
  setFiles: (files: IFileTypes[]) => void;
};

const ForwardRef = forwardRef<HTMLVideoElement, Props>(
  (
    {
      className,
      videoSource,
      handleLoadedMetadata,
      setTime,
      files,
      setFiles,
    }: Props,
    ref
  ) => {
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const [videoUrl, setVideoUrl] = useState<string | null>(videoSource || null);

    const dragRef = useRef<HTMLLabelElement | null>(null);
    const fileId = useRef<number>(0);

    useEffect(() => {
      const video = (ref as any).current as any;
      const updateValue = (element: any) => {
        setTime(element?.currentTime);
      };

      if (video) {
        video.addEventListener("timeupdate", () => updateValue(video));
      }

      return () => {
        if (video) {
          video.removeEventListener("timeupdate", () => updateValue(video));
        }
      };
    }, [ref]);

    const onChangeFiles = useCallback(
      (e: ChangeEvent<HTMLInputElement> | any): void => {
        let selectFiles: File[] = [];
        let tempFiles: IFileTypes[] = files;

        if (e.type === "drop") {
          selectFiles = e.dataTransfer.files;
        } else {
          selectFiles = e.target.files;
        }

        for (const file of selectFiles) {
          tempFiles = [
            ...tempFiles,
            {
              id: fileId.current++,
              object: file,
            },
          ];
        }

        setFiles(tempFiles);
        setVideoUrl(URL.createObjectURL(selectFiles[0]));
      },
      [files, setFiles]
    );

    const handleFilterFile = useCallback(
      (id: number): void => {
        setFiles(files.filter((file: IFileTypes) => file.id !== id));
      },
      [files, setFiles]
    );

    const handleDragIn = useCallback((e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();
    }, []);

    const handleDragOut = useCallback((e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      if (e.dataTransfer!.files) {
        setIsDragging(true);
      }
    }, []);

    const handleDrop = useCallback(
      (e: DragEvent): void => {
        e.preventDefault();
        e.stopPropagation();

        onChangeFiles(e);
        setIsDragging(false);
      },
      [onChangeFiles]
    );

    const initDragEvents = useCallback((): void => {
      if (dragRef.current !== null) {
        dragRef.current.addEventListener("dragenter", handleDragIn);
        dragRef.current.addEventListener("dragleave", handleDragOut);
        dragRef.current.addEventListener("dragover", handleDragOver);
        dragRef.current.addEventListener("drop", handleDrop);
      }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

    const resetDragEvents = useCallback((): void => {
      if (dragRef.current !== null) {
        dragRef.current.removeEventListener("dragenter", handleDragIn);
        dragRef.current.removeEventListener("dragleave", handleDragOut);
        dragRef.current.removeEventListener("dragover", handleDragOver);
        dragRef.current.removeEventListener("drop", handleDrop);
      }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

    useEffect(() => {
      initDragEvents();

      return () => resetDragEvents();
    }, [initDragEvents, resetDragEvents]);

    return (
      <div className={`${className}`}>
        {videoUrl ? (
          <div className="w-full h-full">
            <video
              className="h-full"
              ref={ref}
              src={videoUrl}
              onLoadedMetadata={handleLoadedMetadata}
              controls
            />
          </div>
        ) : (
          <div className=" border-2 border-black rounded-lg w-full h-full">
            <input
              type="file"
              id="fileUpload"
              style={{ display: "none" }}
              multiple={true}
              onChange={onChangeFiles}
            />

            <label
              className={
                isDragging
                  ? " w-full h-full flex justify-center items-center"
                  : " w-full h-full flex justify-center items-center"
              }
              htmlFor="fileUpload"
              ref={dragRef}
            >
              <div>파일 첨부</div>
            </label>

            <div className="DragDrop-Files">
              {files.length > 0 &&
                files.map((file: IFileTypes) => {
                  const {
                    id,
                    object: { name },
                  } = file;

                  return (
                    <div key={id}>
                      <div>{name}</div>
                      <div
                        className="DragDrop-Files-Filter"
                        onClick={() => handleFilterFile(id)}
                      >
                        X
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    );
  }
);

ForwardRef.displayName = "ForwardRef";

const VideoIO = Object.assign(ForwardRef, {
  ForwardRef,
});

export default VideoIO;

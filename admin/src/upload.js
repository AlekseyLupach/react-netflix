import storage from "./firebase";

export default function upload(items, setUpdate, setProgressBar) {
  items.forEach((item) => {
    const fileName = new Date().getTime() + item.label + item.file?.name;
    const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
          setProgressBar(progress)
      },
      (error) => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          setUpdate((prev) => {
            return { ...prev, [item.label]: url };
          });
          setProgressBar(true)
        });
      }
    );
  });
}

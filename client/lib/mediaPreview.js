/* global FileReader */
export default function mediaPreview(files) {
  const filesWrapper = [...files];

  const result = Promise.all(filesWrapper.map(file => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      if (reader.result) {
        resolve({
          dataURL: reader.result,
          file,
        });
      } else {
        reject();
      }
    };
  }).then(promise => promise))).then(value => value);

  return result;
}

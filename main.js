function decodeImage(img = new Image()) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  const data = [];

  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];

    data.push([r, g, b, a]);
  }
  return data;
}

function encodeData(data = {}, output = "image.png") {
    data = JSON.parse(data);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  canvas.width = data.w;
  canvas.height = data.h;

  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const pixels = imageData.data;

  for (let i = 0; i < data.data.length; i++) {
    const r = data.data[i][0];
    const g = data.data[i][1];
    const b = data.data[i][2];
    const a = data.data[i][3];

    pixels[i * 4 + 0] = r;
    pixels[i * 4 + 1] = g;
    pixels[i * 4 + 2] = b;
    pixels[i * 4 + 3] = a;
  }
  ctx.putImageData(imageData, 0, 0);
  var link = document.createElement("a");
  link.download = output;
  link.href = canvas.toDataURL();
    link.click();
    
    return canvas.toDataURL()
}

function generateTxt({ w, h, data, fileName = "output" }) {
  const link = document.createElement("a");

  const file = new Blob([JSON.stringify({ w, h, data })], {
    type: "text/plain",
  });

  link.href = URL.createObjectURL(file);

  link.download = fileName + ".txt";

  link.click();
  URL.revokeObjectURL(link.href);
}

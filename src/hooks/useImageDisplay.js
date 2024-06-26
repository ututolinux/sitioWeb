import { useState } from "react";

const DISPLAY = {
  NONE: "none",
  BLOCK: "block"
}

const useImageDisplay = () => {

  const [height, _] = useState(window.innerHeight);

  return height > 760 ? DISPLAY.BLOCK : DISPLAY.NONE;
}
export default useImageDisplay
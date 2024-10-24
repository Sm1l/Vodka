export const getRelativePathFromUrl = (url: string): string => {
  const decodedUrl = decodeURIComponent(url);
  const pathStartIndex = decodedUrl.indexOf("/o/") + 3;
  const pathEndIndex = decodedUrl.indexOf("?");
  const relativePath = decodedUrl.substring(pathStartIndex, pathEndIndex);
  return relativePath;
};

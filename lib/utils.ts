// Create a function that slices an ethereum address in two parts
// Example: 0x54734f265c05eCEC127141704Ff13266Bdda691A becomes 0x547...691A
export const sliceAddress = (address: string): string => {
  return `${address.slice(0, 5)}...${address.slice(-4)}`;
};

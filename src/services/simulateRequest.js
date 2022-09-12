const TIME = 2000;
export default function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, TIME));
}

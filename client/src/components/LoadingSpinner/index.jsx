import smallLogo from "@/assets/images/smallLogo.webp";
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={smallLogo} className="z-0 h-16 sm:h-22 w-auto m-auto animate-spinning-cart" />
    </div>
  );
};

export default LoadingSpinner;

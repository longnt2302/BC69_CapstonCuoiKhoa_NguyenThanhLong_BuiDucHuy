export const reloadScripts = (scripts: string[]) => {
  scripts.forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log(`${src} loaded successfully`);
      document.body.removeChild(script);
    };

    script.onerror = () => {
      console.error(`Error loading ${src}`);
    };
  });
};

function toggleLibras(clickedButton) {
  const iframe = clickedButton.closest(".iframe-video").querySelector("iframe");
  const textIframe = clickedButton.closest(".iframe-video").querySelector("p");
  if (!iframe) {
      console.error('Vídeo não encontrado:', clickedButton.id);
      return;
  }

  const currentSrc = iframe.src;
  const videoLinks = videos[iframe.id];

  if (!videoLinks) {
      console.error('Links não definidos para:', iframe.id);
      return;
  }

  if (currentSrc === videoLinks.video) {
      iframe.src = videoLinks["video_libras"];
      // adiciona "- libras" se ainda não estiver
      if (!textIframe.textContent.includes("- libras")) {
          textIframe.textContent += " - libras";
      }
  } else {
      iframe.src = videoLinks.video;
      // remove "- libras" se estiver presente
      textIframe.textContent = textIframe.textContent.replace(" - libras", "");
  }
}
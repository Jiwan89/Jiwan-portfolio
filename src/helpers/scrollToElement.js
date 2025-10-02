function scrollToElement(id) {
  try {
    const TargetElement = document.getElementById(id);
    TargetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn("can't scroll to the target element, as Id is not exist", err);
  }

  return true;
}

export default scrollToElement;

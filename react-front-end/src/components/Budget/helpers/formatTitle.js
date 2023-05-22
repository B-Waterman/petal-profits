function formatTitle(title) {
  // Replace underscores with space
  const formattedTitle = title.replace(/_/g, ' ');

  // Capitalize first letter of each word
  const words = formattedTitle.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0) + word.slice(1).toLowerCase());

  const result = capitalizedWords.join(' ');

  return result;
}

module.exports = { formatTitle };

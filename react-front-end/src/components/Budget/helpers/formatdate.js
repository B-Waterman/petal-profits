const formatDate = (dateStr) => {

    const date = new Date(dateStr);

    const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  const formattedDate = formatter.format(date);

  return formattedDate
}

module.exports = formatDate;

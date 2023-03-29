// function called smartGarbage(trash, bins), which increases the garbage count for waste, recycling, or compost depending on what trash is submitted.

function smartGarbage(trash, bins) {
  if (trash === 'waste') {
    bins['waste'] = bins['waste'] + 1
  }
  else if (trash === 'recycling') {
    bins['recycling'] = bins['recycling'] + 1
  }
  else if (trash === 'compost') {
    bins['compost'] = bins['compost'] + 1
  }
  return bins;
} 

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 });



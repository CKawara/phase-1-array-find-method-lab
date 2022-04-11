function superbowlWin(record) {
    let winningYear = record.find(element => element.result === "W")
    if (winningYear) {
    return winningYear.year;
    }
    else {
        return undefined;
    }
  }
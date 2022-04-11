function superbowlWin(record){
    let winning = record.find(element => element.result === "W" )
    if(winning){
        return winning.year;
    }else {
        return undefined;
      }
  }
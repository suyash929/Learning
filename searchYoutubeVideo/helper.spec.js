describe('helper',() => {

  // number formatting
  it('should return number without changing it format as it is less than 1000',() => {
    expect(numFormatter(326)).toEqual(326);
  });
  it('should return number using K representation as number is > 1000',() => {
    expect(numFormatter(32600)).toEqual('32.6K');
  });
  it('should return number using M representation as number is > 10000000',() => {
    expect(numFormatter(3260000)).toEqual('3.3M');
  });
  // Date formatting
  it('should return date difference in seconds ago ',() => {
    expect(timeDifference(new Date('Wed Feb 03 2021 12:30:30 GMT+0530 (India Standard Time)'),new Date('Wed Feb 03 2021 12:30:16 GMT+0530 (India Standard Time)'))).toEqual('14 seconds ago');
  });
  it('should return date difference in minutes ago ',() => {
    expect(timeDifference(new Date('Wed Feb 03 2021 12:32:16 GMT+0530 (India Standard Time)'),new Date('Wed Feb 03 2021 12:30:16 GMT+0530 (India Standard Time)'))).toEqual('2 minutes ago');
  });
  it('should return date difference in hours ago ',() => {
    expect(timeDifference(new Date('Wed Feb 03 2021 13:30:16 GMT+0530 (India Standard Time)'),new Date('Wed Feb 03 2021 12:30:16 GMT+0530 (India Standard Time)'))).toEqual('1 hours ago');
  });
  it('should return date difference in days ago ',() => {
    expect(timeDifference(new Date('Wed Feb 04 2021 12:30:16 GMT+0530 (India Standard Time)'),new Date('Wed Feb 03 2021 12:30:16 GMT+0530 (India Standard Time)'))).toEqual('1 days ago');
  });
  it('should return date difference in months ago ',() => {
    expect(timeDifference(new Date('Wed Mar 10 2021 12:30:16 GMT+0530 (India Standard Time)'),new Date('Wed Feb 03 2021 12:30:16 GMT+0530 (India Standard Time)'))).toEqual('1 months ago');
  });
  it('should return date difference in years ago ',() => {
    expect(timeDifference(new Date('Wed Feb 03 2022 12:30:16 GMT+0530 (India Standard Time)'),new Date('Wed Feb 03 2021 12:30:16 GMT+0530 (India Standard Time)'))).toEqual('1 years ago');
  });


});

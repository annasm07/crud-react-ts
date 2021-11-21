export default function calculateMedium(reviewsArray:number[]) {
  const reviewsSum = reviewsArray.reduce((acc:number, review:number) => (acc + review));
  return (reviewsSum / reviewsArray.length).toFixed(1);
}

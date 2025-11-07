import { Card} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import grayStar from "/assets/gray-star.png";
import goldStar from "/assets/gold-star.png";
export default function RatingPopup() {
  const [rating, setRating] = useState <number>(0);
  const [review, setReview] = useState <string>("");
  const [hover, setHover] = useState <number | null>(null);


  const handleStarClick = (value: number) => {
    setRating(value);

  }
  const handleSubmit = async () => {
  }
  return (
    <Card className="w-full max-w-md mx-auto p-6 text-start rounded-2xl shadow-lg space-y-4">
      <h2 className="text-md text-start">Your Rate</h2>
<div className="flex justify-between">
      <div className="flex justify-center items-center gap-2">
  
        {[1, 2, 3, 4, 5].map((_, i) => (
          <img src={rating > i || (hover && hover > i) ? goldStar : grayStar}
           className={`w-8 h-8 cursor-pointer`}
            onMouseEnter={()=>setHover(i + 1)} 
          onMouseLeave={()=>setHover(null)}
            onClick={() => handleStarClick(i + 1)} key={i} />
        ))}
      </div>


      <p className=" text-5xl font-large text-gray-600"><span>{rating}</span>/5</p>
</div>
      {/* Textarea */}
      <div className="space-y-2 gap-5">
        <label className="font-large text-2xl">Your Review</label>
        <Textarea
          placeholder="Write your review..."
          className="w-full h-48 resize-none mt-9"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>

      <Button disabled ={rating === 0} onClick={handleSubmit} className="w-full bg-blue-700 hover:bg-blue-700 text-white">
        Send your review
      </Button>
    </Card>
  );
}

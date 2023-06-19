import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

export  function UpcomingEvents() {
  return (
    <><Card className="relative left-10  mt-16 w-96 h-[430px]">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src="../img/puzzle.jpg" className="h-full" alt="img-blur-shadow" layout="fill" />
      </CardHeader>
      <CardBody className="">
        <Typography variant="h5" color="blue-gray" className="mb-2 relative flex justify-center">
          Event Name
        </Typography>
        <Typography className="relative top-3 font-semibold text-xl ">
          Date
        </Typography>
        <Typography className="relative font-semibold text-xl top-10">
          Time
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">

      </CardFooter>
    </Card>
   </>
    
  );
}






export default UpcomingEvents;

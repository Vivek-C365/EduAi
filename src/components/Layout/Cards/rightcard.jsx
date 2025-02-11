import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  export function Rightcard({ title, heading, description }) {
    return (
      <Card className="w-auto max-w-[24rem] bg-[#101010] border border-[#7E7E7E]">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none bg-transparent"
        >
          <Typography variant="small" color="blue-gray" className="font-medium">
            {title}
          </Typography>
          <Typography
            color="blue-gray"
            className="mt-1 mb-2 text-[20px] font-bold"
          >
            {heading}
          </Typography>
        </CardHeader>
        <CardBody className="px-4 pt-0">
          <Typography className="font-normal text-gray-600">
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 px-4">
          <Button>read more</Button>
        </CardFooter>
      </Card>
    );
  }
  
  export default Rightcard;
  
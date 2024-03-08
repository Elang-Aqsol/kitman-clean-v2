import Image from "next/image";
import RepImage from "@/public/dashboard-image.jpg";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

export function Error404() {
  return (
    <Card className="absolute w-1/2 md:w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:flex md:flex-col items-center">
      <CardHeader>
        <CardTitle className="md:text-4xl text-center font-bold transform hover:scale-110 transition-transform">
          ERROR 404
        </CardTitle>
        <CardDescription className="text-center">
          Page Under Contruction
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={RepImage}
          className="w-64 w-screen md:w-96 flex items-center hover:scale-125 transition-transform"
          alt="404 Error Image"
        />
      </CardContent>
      <CardFooter className="justify-center text-center">
        try other Page
      </CardFooter>
    </Card>
  );
}

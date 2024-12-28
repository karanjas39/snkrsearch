import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

function SearchedProduct({
  brand,
  model,
  imageURL,
  name,
  link,
}: {
  brand: string;
  model: string;
  imageURL: string;
  name: string;
  link: string;
}) {
  return (
    <Link href={link} target="_blank">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>
            <div className="relative w-full h-[300px]">
              <Image
                src={imageURL}
                alt={name}
                fill
                className="object-contain"
                priority={false}
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </div>
          </CardTitle>
          <CardDescription className="flex flex-col gap-1">
            <p className="line-clamp-2">{name}</p>
            <div className="flex items-start gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge className="max-w-max">{brand}</Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Product Brand</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge className="max-w-max" variant="secondary">
                      {model}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Product Model</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default SearchedProduct;

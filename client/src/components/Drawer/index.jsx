import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button"
import { data } from "./DrawerData"


export default function DrawerBox({btnName}) {
  return (
    <Drawer>
      <DrawerTrigger className="text-lg h-full w-full">{btnName}</DrawerTrigger>
      <DrawerContent className="px-20">
        <DrawerHeader>
          <DrawerTitle className=" text-2xl">
            {data.title}
          </DrawerTitle>
          <DrawerDescription className="text-base">
            <div className="flex-col gap-2">
              {data.desc.map((item) => (
                <div>
                  {item}
                </div>
              ))}
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  )
}
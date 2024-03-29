import {
    FocusLock,
    Button,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger, useDisclosure
  } from "@chakra-ui/react";
import CreateItineraryForm from "./CreateItineraryForm";
import {useEffect, useRef, useState} from "react";
import {getRequest} from "../utilites/axios.js";
  
export default function CreateItineraryPopover(props) {
    const {loadItinerary} = props
const { onOpen, onClose, isOpen } = useDisclosure()
const firstFieldRef = useRef(null)
return (
    <div style={{textAlign: "center"}}>
    <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
    >
        <PopoverTrigger>
        <Button size='sm'> Create New Itinerary </Button>        
        </PopoverTrigger>
        <PopoverContent p={5}>
        <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow/>
            <PopoverCloseButton/>
            <CreateItineraryForm firstFieldRef={firstFieldRef} onCancel={onClose} loadItinerary={loadItinerary}/>
        </FocusLock>
        </PopoverContent>
    </Popover>
    </div>
)
}
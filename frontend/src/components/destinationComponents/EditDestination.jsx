import {
  FocusLock,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger, useDisclosure
} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";
import PopoverForm from "./PopoverForm.jsx";
import {useRef, useState} from "react";

export default function EditDestination(props) {
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
          <IconButton size='sm' icon={<EditIcon/>}/>
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow/>
            <PopoverCloseButton/>
            <PopoverForm 
              firstFieldRef={firstFieldRef} 
              onCancel={onClose} 
              props={props}
              onClose={onClose}/>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </div>
  )
}
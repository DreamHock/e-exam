import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useEffect } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



export default function MultipleSelectCheckmarks({ allgroups, selectedGroups ,examsState,setExamsList,exam}) {
    const [showSelectedGroups, setShowSelectedGroups] = React.useState([]);

    

    const extractNamesAndShow = () => {
        var values = selectedGroups.map(group => {
            return group.groupsName
        })
        return values
    }
    const checkifExsists = (group) => {
        // console.log(group,selectedGroups);
        var found = false;
        selectedGroups.map(selectedGroup => {
            if (group.id == selectedGroup.id) {
                found = true
            }
        })

        return found;
    }

    const addGroupToExam = (exam, group) => {
        var newData = examsState.map(examele => {
            if (exam.id == examele.id) {
                examele.Groups.push(group);
                return examele
            } else {
                return examele
            }
        })
        setExamsList(newData);
    }
    const removeGroupfromExam = (exam, group) => {
        var newData = examsState.map(examele => {
            if (exam.id == examele.id) {
                examele.Groups = examele.Groups.filter((ele) => ele.id != group.id)
                return examele;
            } else {
                return examele;
            }
        })
        setExamsList(newData);
    }
   

    return (
        <div>
            <FormControl size="small" sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={extractNamesAndShow()}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                >

                    {allgroups.map((group) => (
                        <MenuItem key={group.id} value={group.groupsName}>
                            <Checkbox checked={checkifExsists(group)?true:false} onChange={(e)=>{
                                
                                const {checked} = e.target ;
                                if(checked){
                                    addGroupToExam(exam,group);
                                }else{
                                    removeGroupfromExam(exam,group)
                                }
                            }} />
                            <ListItemText primary={group.groupsName} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

import { getTags } from "../service";
import { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack"

function SelectTags({ props }) {
    const [tags, setTags] = useState([]);
    const { selectTags } = props;
    const { setSelectTags } = props;
    
    
    const handleTags = async () => {
        try {
            const apiTags = await getTags();
            setTags(apiTags)
        }
        catch {
        
        }
    }
    
    useEffect(() => {
        handleTags();
    }, []);

    const handleChange = (event) => {
        if (!event.target.checked) {
            setSelectTags(selectTags => selectTags.filter(selectTag => selectTag !== event.target.name))
        } else {
            setSelectTags(selectTags => [...selectTags, event.target.name])
        }
    }
    
    
    return <Stack direction="horizontal" className="mt-2" gap={3}>
        {tags.map((tag) =>  {
            return <Form.Group key={tag} className="mb-3"  controlId={tag}>
                <Form.Check type="checkbox" label={tag} name={tag} value={tag} checked={selectTags.includes(tag)} onChange={handleChange} inline/>
            </Form.Group>
        })} 
            </Stack>
}

export default SelectTags;
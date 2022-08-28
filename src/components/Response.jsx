import { Typography, Box, TextareaAutosize } from "@mui/material"

const textareaStyle = { 
    width: '100%', 
    padding: 10,  
    background: `url(http://i.imgur.com/2cOaJ.png)`,
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    paddingLeft: 35,
    paddingTop: 10,
    borderColor: '#ccc' 
}

const Response = ({ data }) => {

    let obj = data;
    let read = '{\n';
    for (let key in obj)
    {
        read += '\t'
        read += (typeof obj[key] === "string") ?`${key}: "${obj[key]}"`:`${key}: ${obj[key]}`
        if(Object.keys(obj).pop() !== key.toString())
        {
            read += ',\n'
        }
    }
    read += '\n}'
    return (
        <Box>
            <Typography mt={2} mb={2}>Response</Typography>
            <TextareaAutosize 
                minRows={3}
                maxRows={5}
                style={textareaStyle}
                disabled="disabled"
                value={read}
            />
        </Box>
    )
}

export default Response;
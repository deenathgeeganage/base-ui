import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const AddTaskForm = (props) => {
  const [fileList, setFileList] = useState([]);
  const fileProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  return (
    <Form form={props?.form} name="addtask">
      <Form.Item name="folder" label="Execution Folder Name">
        <Input />
      </Form.Item>
      <Form.Item name="command" label="Execution Command">
        <Input />
      </Form.Item>
      <Form.Item name="atrributes" label="Execution Attributes">
        <Input />
      </Form.Item>
      <Form.Item name="file" label="Upload File">
        <Upload {...fileProps}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </Form.Item>
    </Form>
  );
};

export default AddTaskForm;

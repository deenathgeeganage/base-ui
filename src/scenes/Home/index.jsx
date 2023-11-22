import { Button, Card, Flex, FloatButton, Modal, Table, Tooltip } from "antd";
import Title from "antd/es/typography/Title";
import { withConfigContext } from "../../components/context/ConfigContext";
import styles from "./styles.module.css";
import {
  DownloadOutlined,
  CloseOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import { useForm } from "antd/es/form/Form";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = useForm();
  const MODAL_TITLE = "Create New Task";
  const showModal = () => {
    setIsModalOpen(true);
  };
  const onOk = () => {
    setIsModalOpen(false);
  };
  const onCancel = () => {
    setIsModalOpen(false);
  };
  const data = [
    {
      id: 1,
      status: "completed",
    },
    {
      id: 2,
      status: "completed",
    },
    {
      id: 3,
      status: "ongoing",
    },
    {
      id: 4,
      status: "queued",
    },
  ];
  const columns = [
    {
      title: "Process ID",
      dataIndex: "id",
      key: "id",
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "id",
    },
    {
      title: "Action",
      key: "id",
      width: 10,
      render: (_, record) => (
        <Flex
          gap="middle"
          justify="center"
          align="center"
          vertical
          key={record.id}
        >
          {record.status === "completed" ? (
            <Tooltip title="Download Content">
              <Button shape="circle" icon={<DownloadOutlined />} />
            </Tooltip>
          ) : (
            <Tooltip title="Cancel Operation">
              <Button shape="circle" icon={<CloseOutlined />} danger />
            </Tooltip>
          )}
        </Flex>
      ),
    },
  ];
  return (
    <div>
      <Card className={styles.container_Card}>
        <Flex gap="middle" vertical>
          <Title>Tasks</Title>
          <Table className={styles.table} dataSource={data} columns={columns} />
        </Flex>
        <FloatButton
          className={styles.addButton}
          icon={<PlusCircleOutlined />}
          tooltip={<div>Create a new Task</div>}
          onClick={showModal}
        />
      </Card>
      <Modal
        open={isModalOpen}
        onCancel={onCancel}
        onOk={onOk}
        title={MODAL_TITLE}
      >
        <AddTaskForm form={form} />
      </Modal>
    </div>
  );
};

export default withConfigContext(Home);

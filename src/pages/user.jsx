import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { getUserApi } from '../util/api';

const UserPage = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUserApi();
      if (res) {
        setDataSource(res);
      } else {
        console.error('Failed to fetch user data');
      }
    };
    fetchUser();
  }, []);

  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        rowKey={'_id'}
      />
    </div>
  );
};

export default UserPage;

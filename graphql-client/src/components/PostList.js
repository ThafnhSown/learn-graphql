import { List } from 'antd'

const PostList = ({data}) => {
    return (
        <List
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={item.body}
            />
          </List.Item>
        )}
      />
    )
}

export default PostList
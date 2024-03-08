const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>heading</th>
          <th>location</th>
          <th>img</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.heading}</td>
            <td>{item.location}</td>
            <td>{item.img}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

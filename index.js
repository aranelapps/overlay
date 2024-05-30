import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const { query } = router;

  const items = Object.values(query);

  return (
    <div style={overlayStyle}>
      <h1>Overlay List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const overlayStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Index;

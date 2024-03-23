import RandomPicture from '../1.jpeg';

interface AchievementItemProps {
  title: string;
  subtitle: string;
  date: string;
};

const AchievementItem: React.FC<AchievementItemProps> = (props) => {
  return (
    <div style={{ display: 'grid', gap: '0.5rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <img
          alt="Avatar"
          style={{
            borderRadius: '0.5rem',
            height: '4rem',
            width: '4rem',
            aspectRatio: '64/64',
            objectFit: 'cover',
          }}
          src={RandomPicture}
          height="64"
          width="64"
        />
        <div style={{ display: 'grid', gap: '0.75rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '700', lineHeight: '1', margin: '0' }}>{props.title}</h3>
          <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>{props.subtitle}</p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>{props.date}</p>
      </div>
    </div>
  );
};

export default AchievementItem;

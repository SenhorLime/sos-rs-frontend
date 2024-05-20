import { Button } from '@/components/ui/button';

const buttons = [
  { label: 'Aceita Pets', onClick: () => console.log('Aceita Pets clicado') },
  {
    label: 'Está disponível',
    onClick: () => console.log('Está disponível clicado'),
  },
  {
    label: 'Precisa de voluntários',
    onClick: () => console.log('Precisa de voluntários clicado'),
  },
];

export const QuickFilterRow = () => {
  return (
    <div className="flex gap-2">
      {buttons.map((button) => (
        <Button
          variant="outline"
          size="sm"
          className="flex items-center rounded-full"
          key={button.label}
          {...button}
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
};

import { formatDate } from '@/app/libs/utils';

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return (
    <span>
      {formatDate(date)}
    </span>
  );
}
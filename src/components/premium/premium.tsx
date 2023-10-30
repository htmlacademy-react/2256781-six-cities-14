import { MarkType } from '../../const';

type TPremiumProps = {
  mark: MarkType;
  isPremium: boolean;
};

function Premium({ mark, isPremium }: TPremiumProps): JSX.Element | null {
  return isPremium ? (
    <div className={mark}>
      <span>Premium</span>
    </div>
  ) : null;
}

export { Premium };

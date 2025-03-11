import { memo } from 'react';

const PremiumClass = ({ type }: { type: string }) => (
  <div className={`${type}__mark`}>
    <span>Premium</span>
  </div>
);

const MemorizedPremiumClass = memo(PremiumClass);
export default MemorizedPremiumClass;

import React from 'react'

import CountUp from 'react-countup'
import AnimatedCounter from './AnimatedCounter';
type TotalBalanceBoxProps = {
  accounts?: any[];
  totalBanks: number;
  totalCurrentBalance: number;
};

const formatAmount = (amount: number) => {
  return `$${amount.toLocaleString()}`;
};

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* DoughnutChart */}
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Total Current Balance
          </p>
          <p className="total-balance-amount flex-center gap-2">
           <AnimatedCounter amount=
           {totalCurrentBalance}
            />
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;

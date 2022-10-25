import React from "react";

interface BudgetListProps {
    budget: {
        budget: number,
        revenue: number,
        runtime: number,
    }
}

const BudgetList = ({budget}: BudgetListProps) => {

    return (
        <div>
            <div className="flex items-center mb-1.5 text-sm">
                <div className="w-32 text-[#565c67]">Budget:</div>
                <div className="text-white">
                    $ {budget.budget <= 0 ? 'No acute data' : new Intl.NumberFormat('en-EN').format(budget.budget)}
                </div>
            </div>

            <div className="flex items-center mb-1.5 text-sm">
                <div className="w-32 text-[#565c67]">Revenue:</div>
                <div className="text-white">
                    $ {budget.revenue <= 0 ? 'No acute data' : new Intl.NumberFormat('en-EN').format(budget.revenue)}
                </div>
            </div>

            <div className="flex items-center mb-1.5 text-sm">
                <div className="w-32 text-[#565c67]">Runtime:</div>
                <div className="text-white">{budget.runtime} min</div>
            </div>
        </div>
    );
};

export default BudgetList;

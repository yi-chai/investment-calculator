import {Table} from "antd";
import {calculateInvestmentResults, formatter} from "../util/investment";

export default function Results({input}) {
    const results = calculateInvestmentResults(input);

    const initialInvestment =
        results[0].valueEndOfYear -
        results[0].interest -
        results[0].annualInvestment;

    function totalInterest(data) {
        return (
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment
        );
    }

    function totalAmount(data) {
        return data.valueEndOfYear - data.totalInterest;
    }

    results.forEach((data) => {
        data.totalInterest = totalInterest(data);
        data.totalAmountInvested = formatter.format(totalAmount(data));
        data.totalInterest = formatter.format(data.totalInterest);
        data.valueEndOfYear = formatter.format(data.valueEndOfYear);
        data.interest = formatter.format(data.interest);
    });

    console.log(results);

    const columns = [
        {
            title: "Year",
            dataIndex: "year",
            key: "year",
        },
        {
            title: "Investment Value",
            dataIndex: "valueEndOfYear",
            key: "valueEndOfYear",
        },
        {
            title: "Interest (Year)",
            dataIndex: "interest",
            key: "interest",
        },
        {
            title: "Total Interest",
            dataIndex: "totalInterest",
            key: "totalInterest",
        },
        {
            title: "Invested Capital",
            dataIndex: "totalAmountInvested",
            key: "totalAmountInvested",
        },
    ];

    return (
        <Table
            style={{maxWidth: "50rem"}}
            columns={columns}
            dataSource={results}
            pagination={{position: ["bottomCenter"]}}
            size={"small"}
        />
    );
}

import {Input, InputNumber, Typography} from "antd";

const {Title} = Typography;

export default function UserInput({input, onChangeInput}) {
    return (
        <form id="user-input">
            <div className="input-group">
                <Title level={5}>Initial Investment</Title>
                <InputNumber
                    required
                    value={input.initialInvestment}
                    onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
                    controls={false}
                />
            </div>
            <div className="input-group">
                <Title level={5}>Annual Investment</Title>
                <InputNumber
                    required
                    value={input.annualInvestment}
                    onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
                    controls={false}
                />
            </div>
            <div className="input-group">
                <Title level={5}>Expected Return</Title>
                <InputNumber
                    required
                    value={input.expectedReturn}
                    onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
                    controls={false}
                />
            </div>
            <div className="input-group">
                <Title level={5}>Duration</Title>
                <InputNumber
                    required
                    value={input.duration}
                    onChange={(e) => onChangeInput("duration", e.target.value)}
                    controls={false}
                />
            </div>
        </form>
    );
}

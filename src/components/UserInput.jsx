import { Input, Typography } from "antd";

const { Title } = Typography;

export default function UserInput({ input, onChangeInput }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <Title level={5}>Initial Investment</Title>
          <Input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <Title level={5}>Annual Investment</Title>
          <Input
            type="number"
            required
            value={input.annualInvestment}
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <Title level={5}>Expected Return</Title>
          <Input
            type="number"
            required
            value={input.expectedReturn}
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <Title level={5}>Duration</Title>
          <Input
            type="number"
            required
            value={input.duration}
            onChange={(e) => onChangeInput("duration", e.target.value)}
          />
        </p>
      </div>
    </form>
  );
}

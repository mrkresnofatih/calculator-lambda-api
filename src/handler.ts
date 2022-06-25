import { APIGatewayProxyHandler } from "aws-lambda";
import { AddRequest, AddResponse } from "./models/additionModels";
import { DivisionRequest, DivisionResponse } from "./models/divideModels";
import { MultiplyRequest, MultiplyResult } from "./models/multipyModels";
import { SubtractRequest, SubtractResponse } from "./models/subtractModels";
import { wrapFailResponse, wrapSuccessResponse } from "./utilities/responseHandler";

export const multiply : APIGatewayProxyHandler = async (event) => {
  if (!event.body) {
    return wrapFailResponse(4000);
  }
  const data : MultiplyRequest = JSON.parse(event.body);

  const result = data.firstValue * data.secondValue;
  const pkg : MultiplyResult = { multiplicationResult: result }
  return wrapSuccessResponse(pkg);
}

export const add : APIGatewayProxyHandler = async (event) => {
  if (!event.body) {
    return wrapFailResponse(4000);
  }
  const data : AddRequest = JSON.parse(event.body);

  const result = data.firstValue + data.secondValue;
  const pkg : AddResponse = { additionResult: result }
  return wrapSuccessResponse(pkg);
}

export const subtract : APIGatewayProxyHandler = async (event) => {
  if (!event.body) {
    return wrapFailResponse(4000);
  }

  const data : SubtractRequest = JSON.parse(event.body);

  const result = data.firstValue - data.secondValue;
  const pkg : SubtractResponse = { subtractionResult: result }
  return wrapSuccessResponse(pkg);
}

export const divide : APIGatewayProxyHandler = async (event) => {
  if (!event.body) {
    return wrapFailResponse(4000);
  }

  const data : DivisionRequest = JSON.parse(event.body);

  const result = data.firstValue / data.secondValue;
  const pkg : DivisionResponse = { divisionResult: result }
  return wrapSuccessResponse(pkg);
}
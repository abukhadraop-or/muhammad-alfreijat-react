import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import selectFilter from "hooks/selectFilter";
import useFilter from "hooks/useFilters";
import { DatePicker } from "antd";

const Div = styled.div`
  display: flex;
  margin: 0.625rem auto;

  .date_picker {
    height: 1.875rem;
    width: 100%;
  }
`;

const Label = styled.label`
  color: #a4a4a4;
  cursor: pointer;
  display: inline;
  font-size: 0.9rem;
  margin: 0.5875rem 1.25rem 0 0;
  position: relative;
  width: 3.1875rem;
`;

const DateContainer = styled.div`
  width: 100%;
`;
/**
 * A component that set the date filter.
 *
 */
function InputDate() {
  const [gteDate, setGteDate] = useState(new Date());
  const [lteDate, setLteDate] = useState("");
  const { filter, setFilter } = useFilter();

  useEffect(() => {
    const fromDate = lteDate ? lteDate.toISOString().slice(0, 10) : "";
    selectFilter("dateGte", fromDate, filter, setFilter);
  }, [lteDate]);
  useEffect(() => {
    const toDate = gteDate ? gteDate.toISOString().slice(0, 10) : "";
    selectFilter("dateLte", toDate, filter, setFilter);
  }, [gteDate]);
  return (
    <>
      <Div>
        <Label htmlFor="ltedate">From</Label>
        <DateContainer>
          <DatePicker
            className="date_picker"
            id="ltedate"
            selected={lteDate}
            dateFormat="yyyy-MM-dd"
            onChange={(date) => setLteDate(date)}
          />
        </DateContainer>
      </Div>
      <Div>
        <Label htmlFor="gtedate">To</Label>
        <DateContainer>
          <DatePicker
            className="date_picker"
            id="gtedate"
            selected={gteDate}
            dateFormat="yyyy-MM-dd"
            onChange={(date) => setGteDate(date)}
          />
        </DateContainer>
      </Div>
    </>
  );
}

export default InputDate;

﻿using System;

namespace SosCentar.Domain.Models
{
    public class SubmitedAnswer
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
        public Question Question { get; set; }
    }
}

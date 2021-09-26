﻿using SosCentar.Contracts.Dtos.ReportTables;
using SosCentar.Contracts.Dtos.ReportGraph;
using SosCentar.Contracts.Interfaces.Services;
using System;
using SosCentar.Contracts.Interfaces.Repositories;
using System.Collections.Generic;

namespace SosCentar.BusinessLogic.Services
{
	public class ReportsService : IReportService
	{
		private readonly IEntryService _entryService;
		private readonly ICategoryService _categoryService;

		public ReportsService(IEntryService entryService, ICategoryService categoryService)
		{
			_entryService = entryService;
			_categoryService = categoryService;
		}

		public IEnumerable<GraphDto> GetGraphs(DateTime From, DateTime To)
		{
			var Cache = new Dictionary<string, int>();
			var Categories = _categoryService.GetAll();
			var Graph = new GraphDto();
			Graph.Label = "Broj korisnika/ca po uslugama";
			foreach (var Category in Categories)
			{
				Cache.Add(Category.Label, 0);
            }

			var Entries = _entryService.GetInRange(From, To);
			foreach (var Entry in Entries)
            {
				var OldCount = Cache[Entry.Category.Name];
				var NewCount = OldCount + 1;
				Cache[Entry.Category.Name] = NewCount;
			}
			var Data = new List<GraphSliceDto>();
			foreach (var Item in Cache)
            {
				var Dto = new GraphSliceDto();
				Dto.Label = Item.Key;
				Dto.Level = Item.Value.ToString();
				Data.Add(Dto);
            }
			Graph.Data = Data;
			var retList = new List<GraphDto>();
			retList.Add(Graph);
			return retList;
		}

		public Table GetTableReport()
		{
			throw new System.NotImplementedException();
		}
	}
}

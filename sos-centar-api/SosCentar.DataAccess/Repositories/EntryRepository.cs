﻿using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Domain.Models;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.DataAccess.Repositories
{
	public class EntryRepository : IEntryRepository
	{
		private readonly ReportContext _reportContext;

		public EntryRepository(ReportContext reportContext)
		{
			_reportContext = reportContext;
		}

		public void Create(Entry entry)
		{
			_reportContext.Entries.Add(entry);
			_reportContext.SaveChanges();
		}

		public IEnumerable<Entry> GetAll()
		{
			return _reportContext.Entries.AsEnumerable();
		}
	}
}

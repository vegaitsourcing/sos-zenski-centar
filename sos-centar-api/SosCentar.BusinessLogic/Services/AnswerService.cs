﻿using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.BusinessLogic.Services
{
	public class AnswerService : IAnswerService
	{
		private readonly IAnswerRepository _answerRepository;

		public AnswerService(IAnswerRepository answerRepository)
		{
			_answerRepository = answerRepository;
		}

		public IEnumerable<Guid> GetAllIdsForQuestion(Question question)
		{
			return _answerRepository.GetAll().Where(answer => answer.Question == question).Select(answer=> answer.Id);
		}

		public Answer GetById(Guid id)
		{
			return _answerRepository.GetById(id);
		}
	}
}
